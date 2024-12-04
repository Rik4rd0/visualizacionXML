// src/DataViewer.js
import React, { useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography, Button, Box } from "@mui/material";

function DataViewer({ data }) {
  const [visibleComments, setVisibleComments] = useState({});

  const toggleCommentVisibility = (index) => {
    setVisibleComments((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const blocks = data.blocks || [];

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', backgroundColor: '#f9f9f9' }}>
      <List>
        {blocks.map((block, index) => {
          const concatenatedText = block.formatUnits
            ? block.formatUnits.map(unit => unit.text).join(' ')
            : '';

          return (
            <ListItem key={index} alignItems="flex-start" style={{ marginBottom: '20px' }}>
              <ListItemText
                primary={<Typography variant="h6" style={{ color: '#3f51b5', textAlign: 'center' }}>{block.title}</Typography>}
                secondary={
                  <div style={{ textAlign: 'center' }}>
                    <Typography
                      variant="body2"
                      style={{
                        marginBottom: '10px',
                        color: '#333',
                        textAlign: 'left'
                      }}
                    >
                      {concatenatedText}
                    </Typography>
                    {block.comments.length > 0 && (
                      <div>
                        {block.comments.map((comment, i) => (
                          <div key={i}>
                            <Button
                              variant="text"
                              size="small"
                              style={{ color: '#ff5722', textTransform: 'none', fontSize: '0.8rem' }}
                              onClick={() => toggleCommentVisibility(index)}
                              startIcon={<span role="img" aria-label="note">📝</span>}
                            >
                              {comment && comment.formatUnits && comment.formatUnits[1] ? comment.formatUnits[1].text : 'Comentario'}
                            </Button>
                            {visibleComments[index] && comment && (
                              <Box
                                style={{
                                  marginTop: '10px',
                                  padding: '10px',
                                  border: '1px solid #ff5722',
                                  borderRadius: '5px',
                                  backgroundColor: '#fff5f5',
                                }}
                              >
                                <Typography variant="body2" style={{ color: '#ff5722', fontWeight: 'bold', textAlign: 'center' }}>
                                  {comment.formatUnits[3]?.text}
                                </Typography>
                                <Typography variant="body2" style={{ color: '#ff5722', fontWeight: 'bold', marginTop: '10px' }}>
                                  {comment.formatUnits[0]?.text}
                                </Typography>
                                {comment.formatUnits
                                  .filter((_, index) => index !== 1 && index !== 3) // Excluir el segundo y cuarto formatUnit
                                  .map((unit, j) => (
                                    <Typography key={j} variant="body2" style={{ color: '#ff5722' }}>
                                      {unit.text}
                                    </Typography>
                                  ))}
                              </Box>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
}

export default DataViewer;
