/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === "large" ? "32px" : "8px",
        fontSize: size === "large" ? "32px" : "16px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

function partiallyApply(Component, partialProps) {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
}

export default partiallyApply;

export const DangerButton = partiallyApply(Button, { color: "red" });
export const BugSuccessButton = partiallyApply(Button, {
  color: "green",
  size: "large",
});
