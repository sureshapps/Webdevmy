type MapProps = {
  label?: string;
};

/**
 * Placeholder map surface. Swap the inner div for a real map library
 * (e.g. Mapbox GL, Leaflet) if a location-based RI/OS room is added later.
 */
export default function Map({ label = "Map" }: MapProps) {
  return (
    <div
      aria-label={label}
      style={{
        width: "100%",
        minHeight: "220px",
        borderRadius: "16px",
        display: "grid",
        placeItems: "center",
        background: "linear-gradient(135deg, #d6d2c5, #b9c2b9)",
        color: "#3a3a33",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: ".08em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </div>
  );
}
