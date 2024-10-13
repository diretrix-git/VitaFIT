import React, { useState } from "react";

const WorkoutCardComponent = ({ workoutData }) => {
  const domain = `http://localhost:5000`;
  const [selectedType, setSelectedType] = useState("");

  // Handle change in workout type dropdown
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  // Extract unique workout types from workoutData
  const uniqueWorkoutTypes = Array.from(
    new Set(workoutData.data.map((item) => item.type.name))
  );

  // Filter workouts based on selected type
  const filteredWorkouts = selectedType
    ? workoutData.data.filter((item) => item.type.name === selectedType)
    : workoutData.data;

  return (
    <div className="p-4">
      {/* Dropdown for workout types */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Workout Type</label>
        <select
          name="workout types"
          className="w-full p-2 border rounded"
          onChange={handleTypeChange}
        >
          <option value="">Select Workout Type</option>
          {uniqueWorkoutTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Render filtered workouts */}
      {filteredWorkouts.map((item) => (
        <div key={item._id} className="mb-8">
          {/* Workout Plan Details */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold">Workout Plan Details</h3>
            <p>{item.workoutPlanDetails.description}</p>
          </div>

          {/* Exercise Cards */}
          {item.exercises.map((exercise, index) => (
            <div
              key={exercise.id}
              className="flex flex-col md:flex-row items-center border justify-between rounded-lg p-6 mt-4 shadow-lg bg-gradient-to-r from-gray-100 to-gray-300"
            >
              {/* Exercise Image */}
              <div className="w-full md:w-1/3 relative mb-4 md:mb-0">
                <img
                  src={
                    exercise.exerciseImage
                      ? `${domain}/${exercise.exerciseImage}`
                      : "/path/to/placeholder.jpg" // Placeholder if no image is available
                  }
                  alt={exercise.name}
                  className="w-full h-auto rounded-lg border-black border shadow-md object-cover"
                  style={{ aspectRatio: '16 / 9' }} // Maintain a rectangular aspect ratio
                />
                <div className="absolute top-2 left-2 bg-black text-white py-1 px-3 rounded-full text-xs">
                  {item.difficulty}
                </div>
              </div>

              {/* Exercise Info */}
              <div className="w-full md:w-2/3 pl-6 flex flex-col justify-between space-y-4">
                <h4 className="text-3xl font-bold text-gray-800">{exercise.name}</h4>

                <div className="flex items-center justify-around text-lg text-gray-700">
                  <p>
                    Sets: <span className="font-semibold">{exercise.sets}</span>
                  </p>
                  <p>
                    Reps: <span className="font-semibold">{exercise.reps}</span>
                  </p>
                  <p>
                    Rest: <span className="font-semibold">{exercise.rest} sec</span>
                  </p>
                </div>

                <div className="text-sm text-gray-500">
                  <p>Calories Burned: 200</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkoutCardComponent;



// import React, { useState } from "react";

// const WorkoutCardComponent = ({ workoutData }) => {
//   const domain = `http://localhost:5000`;
//   const [selectedType, setSelectedType] = useState("");

//   const imgAddress = (item) => {
//     if (item.workoutImage) {
//       return `${domain}/${item.workoutImage}`;
//     } else {
//       return item.imgUrl;
//     }
//   };
//   const exerciseimgAddress = (item) => {
//     if (item.exercises.exerciseImage) {
//       return `${domain}/${item.exercises.exerciseImage}`;
//     } else {
//       return item.imgUrl;
//     }
//   };

//   console.log("workoutData", workoutData);
//   // Handle change in workout type dropdown
//   const handleTypeChange = (event) => {
//     setSelectedType(event.target.value);
//   };

//   // Filter workouts based on selected type
//   const filteredWorkouts = selectedType
//     ? workoutData.filter((item) => item.type === selectedType)
//     : workoutData;

//   return (
//     <div className="p-4">
//       {/* Dropdown for workout types */}
//       <div className="mb-6">
//         <label className="block text-lg font-semibold mb-2">Workout Type</label>
//         <select
//           name="workout types"
//           className="w-full p-2 border rounded"
//           onChange={handleTypeChange}
//         >
//           <option value="">Select Workout Type</option>
//           {workoutData &&
//             workoutData.map((type) => (
//               <option key={type._id} value={type.type}>
//                 {type.type}
//               </option>
//             ))}
//         </select>
//       </div>

//       {filteredWorkouts &&
//         filteredWorkouts.map((item) => (
//           <div key={item._id} className="mb-8">
//             {/* Main Workout Card */}
//             <div className="flex flex-col md:flex-row gap-6">
//               {/* Workout Image */}
//               {/* <div className="md:w-3/5 w-full">
//                 <img
//                   src={`${imgAddress(item)}`}
//                   alt="Workout"
//                   className="w-full h-auto rounded-md shadow"
//                 />
//               </div> */}

//               {/* Workout Details */}
//               <div className="md:w-2/5 w-full space-y-4">
//                 <h2 className="text-2xl font-semibold">{item.name}</h2>
//                 <p>{item.workoutPlanDetails.description}</p>
//                 {/* Display Difficulty Level */}
//                 <p className="text-gray-700 font-bold">
//                   Difficulty: {item.difficulty}
//                 </p>
//               </div>
//             </div>

//             {/* Workout Plan Details */}
//             <div className="mt-8">
//               <h3 className="text-xl font-semibold">Workout Plan Details</h3>
//               <p>{item.planDetails}</p>
//             </div>

//             {/* Exercise Cards */}
//             {item.exercises &&
//               item.exercises.map((exercise) => (
//                 <div
//                   key={exercise.id}
//                   className="flex items-center border justify-between rounded-lg p-6 mt-4 shadow-lg bg-gradient-to-r from-gray-100 to-gray-300"
//                 >
//                   {/* Exercise Image */}
//                   <div className="w-1/3 relative">
//                     <img
//                       src={`${imgAddress(item)}` || "/path/to/placeholder.jpg"} // Use actual image URL
//                       // src={`${exerciseimgAddress(item)}`}
//                       alt={exercise.name}
//                       className="w-full h-auto rounded-lg border-black border shadow-md"
//                     />
//                     {/* Overlay effect or badge on image */}
//                     <div className="absolute top-2 left-2 bg-black text-white py-1 px-3 rounded-full text-xs">
//                       {item.difficulty}
//                     </div>
//                   </div>
//                   <div className="w-1/3 relative">
//                     <img
//                       // src={`${imgAddress(item)}` || "/path/to/placeholder.jpg"} // Use actual image URL
//                       // src={`${exerciseimgAddress(item)}`}
//                       alt={exercise.name}
//                       className="w-full h-auto rounded-lg border-black border shadow-md"
//                     />
//                     {/* Overlay effect or badge on image */}
//                     <div className="absolute top-2 left-2 bg-black text-white py-1 px-3 rounded-full text-xs">
//                       {item.difficulty}
//                     </div>
//                   </div>

//                   {/* Exercise Info */}
//                   <div className="w-2/3 pl-6 flex flex-col justify-between space-y-4">
//                     {/* Title and Icon */}
//                     <div className="flex items-center justify-between">
//                       <h4 className="text-3xl font-bold text-gray-800">
//                         {exercise.name}
//                       </h4>
//                     </div>

//                     {/* Reps, Sets, and Rest */}
//                     <div className="flex items-center justify-around text-lg text-gray-700">
//                       <p>
//                         Sets:{" "}
//                         <span className="font-semibold">{exercise.sets}</span>
//                       </p>
//                       <p>
//                         Reps:{" "}
//                         <span className="font-semibold">{exercise.reps}</span>
//                       </p>
//                       <p>
//                         Rest:{" "}
//                         <span className="font-semibold">
//                           {exercise.rest} sec
//                         </span>
//                       </p>
//                     </div>

//                     {/* Additional Exercise Info */}
//                     <div className="text-sm text-gray-500">
//                       <p>Calories Burned: 200</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         ))}
//     </div>
//   );
// };

// export default WorkoutCardComponent;
