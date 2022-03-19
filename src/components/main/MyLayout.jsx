import MyFooter from "./MyFooter";
import MyNavbar from "./MyNavbar";

function MyLayout({children}) {
    return ( 
        <>
        <MyNavbar/>
        {children}
        <MyFooter/>
        </>
     );
}

export default MyLayout;