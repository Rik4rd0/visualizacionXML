import React from "react";
import { Container, CircularProgress, Typography, Grid } from "@mui/material";
import DataViewer from "./DataViewer";

function Content({ data }) {
  return (
    <Container className="flex flex-col h-full justify-center items-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <div className="flex flex-grow overflow-hidden">
          <div className="w-full p-4">
            {!data ? (
              <CircularProgress />
            ) : (
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{
                      color: data.documentMetadata?.name === data.documentMetadata?.name.toUpperCase() ? 'red' : '#3f51b5'
                    }}
                  >
                    {data.documentMetadata?.name}
                  </Typography>
                  <Typography variant="body1" gutterBottom style={{ color: '#333' }}>
                    {data.documentMetadata?.description}
                  </Typography>
                  <div className="scrollable-content">
                    <DataViewer data={data} />
                  </div>
                </Grid>
              </Grid>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Content;