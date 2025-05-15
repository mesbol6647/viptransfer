

// import { useSelector } from "react-redux";
// import useAuthCalls from "../service/useAuthCalls";
import * as React from 'react';


function DashboardBlog() {
  // const { user } = useSelector((state) => state.auth);
  // const { logout } = useAuthCalls();

  return (
    <>
      <section className="relative w-full">
        {/* === PC Görseli ve Arama Kutusu === */}
        <div className="hidden md:block bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/pcbanner4.png')",
            height: "750px",
            width: "100%",
          }}>
       
        </div>

        {/* === Mobil Görsel ve Arama Kutusu === */}
        <div className="block md:hidden relative h-[400px] bg-cover bg-center bg-no-repeat "
       style={{ backgroundImage: "url('/images/mobilebanner4.png')" }}>
  </div>
      </section>      
    </>
  );
}

export default DashboardBlog;
