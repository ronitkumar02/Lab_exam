import background from "../src/photos/msrit3.jpg";


export const containerStyle = {
    margin: 0,
    padding: 0,
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'Merriweather',
    background: `url(${background}) no-repeat center center fixed`,
    backgroundSize: 'cover'
};

export const formContainerStyle = {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    fontFamily: 'Noto Sans',
    backgroundColor: "#efe5e5"
}

export default formContainerStyle;