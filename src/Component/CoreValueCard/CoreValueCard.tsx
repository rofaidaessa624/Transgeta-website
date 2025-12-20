import { motion } from "framer-motion";
import { useState } from "react";
type props={
  title:string,
  desc:string
}

export default function CoreValueCard({title,desc}:props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-wrapper w-100 ratio ratio-1x1 mb-4" 
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="card shadow text-center border-0"
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "linear" }}
        style={{ 
          cursor: "pointer", 
          transformStyle: "preserve-3d", 
          height: "100%",
          width: "100%"
        }}
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className=" txt-colored card-body position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <h5 className="mb-1 fw-bold">{title}</h5>
          <small style={{ opacity: 0.8 }}>Click to see more ↻</small>
        </div>

        <div
          className="card-body text-white bg-colored position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-white"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <p className="mb-0 text-center px-2 small">
            {desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}