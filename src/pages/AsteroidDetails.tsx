import { Box, Button, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { getAsteroidInfo, getRandomAsteroidInfo } from "../api/AsteroidApi";
import { AsteroidInfo } from "../types";

const AsteroidDetails = () => {
  const { asteriodId } = useParams<{ asteriodId: string }>();
  const [asteroidInfo, setAsteroidInfo] = useState<AsteroidInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    
    if (asteriodId !== 'random') {
      getAsteroidInfo(asteriodId).then((response) => {
        setAsteroidInfo(response);
        setLoading(false);
      });
    } else {
      getRandomAsteroidInfo().then((response) => {
        setAsteroidInfo(response);
        setLoading(false);
      });
    }
  }, [asteriodId]);

  const backToHome = () => {
    history.push("/");
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
      <Container maxWidth="sm">
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
            {loading ? (
              <Typography
                data-testid="loading"
                style={{ textAlign: "center" }}
                variant="h5"
                component="h3"
              >
                Loading...
              </Typography>
            ) : asteroidInfo ? (
              <>
                <Typography variant="h4" component="h3">
                  {asteroidInfo.name}
                </Typography>
                <Typography
                  style={{ marginTop: 10 }}
                  variant="h6"
                  component="h4"
                >
                  NASA JPL URL:{" "}
                  <Link
                    to={{ pathname: asteroidInfo.nasa_jpl_url }}
                    target="_blank"
                  >
                    Click Here
                  </Link>
                </Typography>
                <Typography
                  style={{ marginTop: 10 }}
                  variant="h6"
                  component="h4"
                >
                  Potentially Hazardous Asteroid:{" "}
                  {asteroidInfo.is_potentially_hazardous_asteroid
                    ? "Yes"
                    : "No"}
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  style={{ textAlign: "center", color: "#ff3333" }}
                  variant="h5"
                  component="h3"
                >
                  Asteroid details not found!
                </Typography>
                <Button
                  type="submit"
                  data-testid="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 35, padding: 12 }}
                  onClick={backToHome}
                >
                  Back to Home
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default AsteroidDetails;
