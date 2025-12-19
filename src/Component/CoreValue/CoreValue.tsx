// Example icons — replace with your own (e.g., from react-icons, @mui/icons, or SVGs)
const icons = [
  "🔥", // icon1
  "🧠", // icon2
  "🤝", // icon3
  "🚀", // icon4
  "🎯", // icon5
  "💡"  // icon6
];

const values = [
  "Passion",
  "Innovation",
  "Collaboration",
  "Growth",
  "Focus",
  "Integrity"
];

export default function CoreValue() {

return (   
   <>
      <style>{`
        .core-diagram {
          position: relative;
          width: 500px;
          height: 500px;
          margin: auto;
        }

        .center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: #0d6efd;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }

        .value-item {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: #fff;
          border: 4px solid #0d6efd;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          box-shadow: 0 0 8px rgba(0,0,0,0.1);
        }

        /* place items in circular layout */
        .item0 { top: 5%; left: 50%; transform: translate(-50%, 0); }
        .item1 { top: 20%; left: 85%; transform: translate(-50%, -50%); }
        .item2 { top: 55%; left: 95%; transform: translate(-50%, -50%); }
        .item3 { top: 80%; left: 55%; transform: translate(-50%, -50%); }
        .item4 { top: 80%; left: 20%; transform: translate(-50%, -50%); }
        .item5 { top: 40%; left: 5%; transform: translate(-50%, -50%); }

      `}</style>

      <div className="core-diagram">
        <div className="center">Core Value</div>

        {values.map((val, i) => (
          <div key={i} className={`value-item item${i}`}>
            <div style={{ fontSize: "28px" }}>{icons[i]}</div>
            <div>{val}</div>
          </div>
        ))}
      </div>
    </>
  );
};

