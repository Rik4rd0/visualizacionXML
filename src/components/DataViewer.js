// src/DataViewer.js
import React from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

function DataViewer({ data }) {
  const blocks = data.blocks || [];

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', backgroundColor: '#f9f9f9' }}>
      <List>
        {blocks.map((block, index) => (
          <ListItem key={index} alignItems="flex-start" style={{ marginBottom: '20px' }}>
            <ListItemText
              primary={<Typography variant="h6" style={{ color: '#3f51b5' }}>{block.title}</Typography>}
              secondary={
                <>
                  {block.formatUnits.map((unit, idx) => (
                    <Typography key={idx} variant="body2" style={{ textAlign: unit.align, marginBottom: '10px', color: '#333' }}>
                      {unit.text}
                    </Typography>
                  ))}
                  {block.comments && (
                    <Typography variant="body2" style={{ marginTop: '10px', color: '#ff5722' }}>
                      Comentario: {block.comments}
                    </Typography>
                  )}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default DataViewer;
