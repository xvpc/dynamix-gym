import { useEffect, useMemo, useState } from "react";

// Nextjs
import Link from "next/link";

// Google Maps
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// Bootstrap
import { Spinner } from "react-bootstrap";

// Mui
import { Button, Tooltip, useMediaQuery } from "@mui/material";

// Icons
import { FaLocationDot } from "react-icons/fa6";

// Assets
import { assetsInfo } from "@/utils/assets";

// Styles
import styles from "@/styles/Home.module.css";

// Framer Motion
import { motion } from "framer-motion"

export default function Location({location, showLocation}: {location: string, showLocation:string}) {
  const matchSm: boolean = useMediaQuery('(min-width:576px)');

  return(
    <motion.div 
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      initial={{ y: 0, x: 0, opacity: 0 }}
      id="location" className="container d-flex flex-row flex-wrap justify-content-center algin-items-center gap-5 py-3">
      <div style={{height: "250px"}} className={matchSm ? "w-50 text-center" : "w-100"}>
        <MapContainer />
      </div>
      <div style={{maxWidth: "250px", height: "120px"}} className="align-center text-center justify-self-center align-self-center d-flex flex-column gap-2">
        <Tooltip title={location} arrow>
          <p className="text-white-50 py-0 px-2 m-0 text-truncate text-wrap">
            {location}
          </p>
        </Tooltip>
        <Link target="_blank" href={assetsInfo.googleMap}>
          <Button className="text-capitalize gap-1" variant="contained" >
            {showLocation} <FaLocationDot size={16} />
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
function MapContainer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY as string,
  });

  if (!isLoaded){
    return(
      <Spinner animation="border" variant="primary" />
    )
  }
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 30.1223144, lng: 31.3674859 }), []);
  const [loadingMarker, setLoadingMarker] = useState(false);

  useEffect(() => {
    setLoadingMarker(true)
  }, [])

  return (
    <GoogleMap zoom={50} center={center} mapContainerClassName={styles.mapContainer}>
      {loadingMarker && <Marker visible position={center} />}
    </GoogleMap>
  );
}
