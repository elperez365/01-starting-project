const TabButton = ({ children, tabSelected, ...props }) => {
  return (
    <li>
      <button
        className={tabSelected === children ? "active" : undefined}
        {...props}
      >
        {children}
      </button>
    </li>
  );
};

export default TabButton;
