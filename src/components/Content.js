import React from "react";
import { Container, CircularProgress, Typography, Grid, Paper } from "@mui/material";
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
                <Grid item xs={12} md={8}>
                  <Typography variant="h5" gutterBottom style={{ color: '#3f51b5' }}>
                    {data.documentMetadata?.name}
                  </Typography>
                  <Typography variant="body1" gutterBottom style={{ color: '#333' }}>
                    {data.documentMetadata?.description}
                  </Typography>
                  <div className="scrollable-content">
                    <DataViewer data={data} />
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
                    <Typography variant="h6" style={{ color: '#3f51b5' }}>Comentarios</Typography>
                    <ul className="list-disc list-inside" style={{ color: '#333' }}>
                      {data.blocks && data.blocks.map((block, index) => (
                        block.comments ? block.comments.map((comment, idx) => (
                          <li key={`${index}-${idx}`}>{comment}</li>
                        )) : null
                      ))}
                    </ul>
                  </Paper>
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