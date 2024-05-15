// import React, { useState } from 'react';
// import styled from 'styled-components';

// // Styled components
// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const StarRating = styled.div`
//   font-size: 24px;
// `;

// const Star = styled.span`
//   cursor: pointer;
// `;

// const ReviewInput = styled.textarea`
//   width: 300px;
//   height: 100px;
//   margin-top: 20px;
// `;

// const SubmitButton = styled.button`
//   margin-top: 10px;
//   padding: 8px 16px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `;

// const RatingReview = () => {
//   const [rating, setRating] = useState(0);
//   const [review, setReview] = useState('');

//   const handleStarClick = (starIndex) => {
//     setRating(starIndex + 1);
//   };

//   const handleReviewChange = (event) => {
//     setReview(event.target.value);
//   };

//   const handleSubmit = () => {
//     if (rating > 0 && review.trim() !== '') {
//       alert(`Thank you for your review!\nRating: ${rating}\nReview: ${review}`);
//     } else {
//       alert('Please provide both rating and review.');
//     }
//   };

//   return (
//     <Wrapper>
//       <StarRating>
//         {[...Array(5)].map((_, index) => (
//           <Star key={index} onClick={() => handleStarClick(index)}>
//             {index < rating ? '★' : '☆'}
//           </Star>
//         ))}
//       </StarRating>
//       <ReviewInput
//         placeholder="Write your review here..."
//         value={review}
//         onChange={handleReviewChange}
//       />
//       <SubmitButton onClick={handleSubmit}>Submit Review</SubmitButton>
//       {rating > 0 && <p>Your rating: {rating}</p>}
//     </Wrapper>
//   );
// };

// export default RatingReview;
