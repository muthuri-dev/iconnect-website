import Wave from "react-wavify"

const Footer = () => {
    return ( 
        <>
        <Wave
        fill="#1A8724"
        paused={false}
        options={{
            height:40,
            amplitude:40,
            speed:0.30,
            points:6
        }} 
        />
        </>
     );
}
 
export default Footer;