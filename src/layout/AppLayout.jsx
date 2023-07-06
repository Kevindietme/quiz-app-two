import NavMenu from "./Nav/NavMenu";
import Footer from "./Footer";

export default function AppLayout({ children }) {

    return(
        <>
        <NavMenu />
            {children}
        <Footer />
        </>
    )
    
}