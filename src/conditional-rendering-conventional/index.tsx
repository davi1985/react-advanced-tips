export const ConditionalRenderingConventional = () => {
  const amount = 7;
  const hasLink = true;

  return (
    <div>
      <h1>Conventional Conditional Rendering</h1>

      {amount === 7 && !hasLink && (
        <div>
          <p>The number is 7</p>
          <p>No link!</p>
        </div>
      )}

      {amount === 7 && hasLink && (
        <div>
          <p>The number is 7</p>
          <a href="https://github.com/davi1985">Github Link</a>
        </div>
      )}

      <p>Conditional are not met!</p>
    </div>
  );
};
