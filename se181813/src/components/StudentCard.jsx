import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';

export default function StudentCard(props) {
  const { student } = props;
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
  sx={{
    height: 200, // Chiều cao và chiều rộng bằng nhau để tạo ảnh vuông
    width: 200,
    margin: "0 auto", // Căn giữa hình ảnh
    borderRadius: "50%", // Tạo hình tròn nếu cần
    objectFit: "cover",
  }}
  image={student?.image}
  title="Student Avatar"
/>


      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          ID: {student?.id}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Name: {student?.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Date Of Birth: {student?.dateofbirth}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Gender: {student?.gender ? "Male" : "Female"}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Class: {student?.class}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate("detail/" + student?.id)}>View Details</Button>
      </CardActions>
    </Card>
  )
}
