import React from "react";
import Content from "./Content";

export default function Footer() {
  return (
    <div
      className="relative h-[500px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        // minHeight: "100vh", // Ensure the footer spans full height
       }}
    >
      <div className="relative h-[calc(100vh+500px)] -top-[100vh]">
        <div className="h-[500px] sticky top-[calc(100vh-500px)]">
          <Content />
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import Content from "./Content";

// export default function Footer() {
//   return (
//     <div
//       className="relative"
//       style={{
//         clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
//         minHeight: "100vh", // Ensure the footer spans full height
//       }}
//     >
//       {/* Content Wrapper */}
//       <div className="relative" style={{ height: "calc(100vh + 200px)" }}>
//         {/* Sticky Footer Content */}
//         <div className="sticky top-[calc(100vh - 200px)] h-[200px]">
//           <Content />
//         </div>
//       </div>
//     </div>
//   );
// }

