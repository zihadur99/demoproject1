```tsx
export default function App() {
  const images = [
    "/clinic.jpg",
    "/dr-mariam.jpg",
    "/clinic_consultation_room_1790737152843 (3).jpg",
    "/clinic_consultation_room_1790737152843.jpg",
    "/photo_2026-09-30_09-05-55 (1).jpg",
    "/photo_2026-09-30_09-05-55 (2).jpg",
    "/photo_2026-09-30_09-05-55.jpg",
  ];

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Image Test</h1>
      <p>এই পেজে ছবিগুলো দেখা যাচ্ছে কি না পরীক্ষা করো।</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        {images.map((src) => (
          <figure key={src} style={{ margin: 0 }}>
            <img
              src={src}
              alt={src}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "contain",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
              onError={(event) => {
                event.currentTarget.alt = `ছবি লোড হয়নি: ${src}`;
                event.currentTarget.style.border = "2px solid red";
              }}
            />
            <figcaption
              style={{
                marginTop: "8px",
                fontSize: "12px",
                overflowWrap: "anywhere",
              }}
            >
              {src}
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
```
