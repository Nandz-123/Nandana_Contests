const express = require("express");
const app = express();
const port = 3000;
const { z } = require("zod");

app.use(express.json());


const db = {
  users: [],
  movies: [
    {
      id:1,
      title:"Inception",
      genre:"Sci-Fi",
      duration:148,
      shows: [
        {
          showId:101,
          time:"10:00 AM",
          pricePerSeat:200,
          availableSeats:50
        },
        {
          showId:102,
          time:"2:00 PM",
          pricePerSeat:250,
          availableSeats:50
        },
        {
          showId:103,
          time:"6:00 PM",
          pricePerSeat:300,
          availableSeats:50
        }
      ]
    },
    {
      id:2,
      title:"The Dark Knight",
      genre:"Action",
      duration:152,
      shows: [
        {
          showId:201,
          time:"11:00 AM",
          pricePerSeat:200,
          availableSeats:50
        },
        {
          showId:202,
          time:"3:00 PM",
          pricePerSeat:250,
          availableSeats:50
        },
        {
          showId:203,
          time:"7:00 PM",
          pricePerSeat:300,
          availableSeats:50
        }
      ]
    },
    {
      id:3,
      title:"Interstellar",
      genre:"Sci-Fi",
      duration:169,
      shows: [
        {
          showId:301,
          time:"12:00 PM",
          pricePerSeat:250,
          availableSeats:50
        },
        {
          showId:302,
          time:"5:00 PM",
          pricePerSeat:300,
          availableSeats:50
        }
      ]
    }
  ]
}

const signupSchema = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string().email()
});

const signinSchema = z.object({
    username: z.string(),
  password: z.string()
});

const bookingSchema = z.object({
  movieId: z.number(),
  showId: z.number(),
  seats: z.number().positive()
});

const updateBookingSchema = z.object({
  seats: z.number().positive()
});


function auth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized"
    });
  }

  const user = db.users.find(u => u.token === token);

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized"
    });
  }

  req.user = user;
  next();
}

app.post("/signup" , (req,res) => {
  const result = signupSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: "Invalid input"
    });
  }

  const { username, password, email } = result.data;

  if (db.users.filter((user) => user.email === email).length == 1) {
    return res.status(409).json({
      success: false,
      message: "User already exists"
    });
  }

  const user = {
    id: db.users.length + 1,
    username,
    password,
    email,
    token: null,
    booking: []
  };

  db.users.push(user);
    res.status(201).json({
        "success": true,
        "message": "User created successfully",
        "userId": user.id
    })
})

app.get('/users', (req, res) => {
    res.json({
        success: true,
        data: db.users,
        message: "Users fetched successfully"
    })
})

app.post("/signin", (req, res) => {
    const result = signinSchema.safeParse(req.body)
     if (!result.success) {
    return res.status(400).json(result.error);
  }

  const user = db.users.find( u =>
      u.username === req.body.username &&
      u.password === req.body.password
  );

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Invalid credentials"
    });
  }

  const token = Math.random().toString();
  user.token = token;

  res.status(200).json({
    success: true,
    message: "Signin successful",
    token
  });
});


app.get("/movies", (req, res) => {
  res.status(200).json({
    success: true,
    movies: db.movies
  });
});

app.get("/movies/:movieId", (req, res) => {
  const movieId = parseInt(req.params.movieId);
  const movie = db.movies.find((item) => item.id === movieId);

  if (!movie) {
    return res.status(404).json({
      success: false,
      message: "Movie not found"
    });
  }
  
    res.status(200).json({
        success: true,
        movie,
        message: "Movie fetched succesfully"
  });
});

app.get("/movies/:movieId/shows", (req, res) => {
  const movie = db.movies.find(m => m.id == req.params.movieId);

  if (!movie) {
    return res.status(404).json({
      success: false,
      message: "Movie not found"
    });
  }

  res.json(movie.shows);
});

app.post("/bookings/:userId", auth, (req,res) => {
  const result = bookingSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json(result.error);
  }

  const movie = db.movies.find(
    m => m.id === req.body.movieId
  );

  if (!movie) {
    return res.status(404).json({
      success:false,
      message:"Movie not found"
    });
  }

  const show = movie.shows.find(
    s => s.showId === req.body.showId
  );

  if (!show) {
    return res.status(404).json({
      success:false,
      message:"Show not found"
    });
  }
  

})
    
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});