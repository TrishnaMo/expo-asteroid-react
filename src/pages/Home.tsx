import React, { useState } from "react";
import { Container, Box, TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [asteroidId, setAsteroidId] = useState<string>("");
  const history = useHistory();

  const navigateToAsteroidDetails = (id: string) => {
    history.push(`/asteriod-details/${id}`);
  };

  return (
    <Container
      component="main"
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xs">
        <Box
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              border: "1px solid #ccc",
              padding: "35px 30px",
              borderRadius: 6,
            }}
          >
            <TextField
              fullWidth
              id="asteroidId"
              data-testid="asteroidId"
              label="Enter Asteroid ID"
              name="asteroidId"
              autoFocus
              variant="outlined"
              onChange={(e) => {
                setAsteroidId(e.target.value);
              }}
            />
            <Button
              type="submit"
              data-testid="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: 35, padding: 12 }}
              disabled={asteroidId === ""}
              onClick={() => {
                navigateToAsteroidDetails(asteroidId);
              }}
            >
              Submit
            </Button>
          </Box>
          <Button
            type="button"
            data-testid="getRandomAsteroid"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 35, padding: 12 }}
            onClick={() => {
              navigateToAsteroidDetails('random');
            }}
          >
            Random Asteroid
          </Button>
        </Box>
      </Container>
    </Container>
  );
};

export default Home;
