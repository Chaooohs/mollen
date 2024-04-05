import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import styles from './StarRating.module.scss'

export const StarRating = ({ singleGood }) => {
  return (
    <>
      <div className={styles.raiting}>
        <Rating
          name="half-rating-read"
          value={singleGood?.rating}
          precision={0.1}
          size="large"
          readOnly
          style={{ color: '#4E76C6' }}
        />
        <Box
          sx={{
            ml: 2, 
            mr: 2, 
            color: '#72716E', 
            fontSize: '18px', 
            fontFamily: "Circe"
          }}
        >
          {singleGood?.rating}
        </Box>
      </div>
    </>
  )
}



{/* <Rating name="half-rating" defaultValue={3.6} precision={0.1} style={{color: '#4E76C6'}} /> */ }
