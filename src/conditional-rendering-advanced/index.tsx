import { Show } from "./Show";

export const ConditionalRenderingAdvanced = () => {
  const amount = 7;
  const hasLink = true;

  return (
    <div>
      <h1>Advanced Conditional Rendering</h1>

      <Show>
        <Show.When isTrue={amount === 7 && !hasLink}>
          <div>
            <p>The number is 7</p>
            <p>No link!</p>
          </div>
        </Show.When>

        <Show.When isTrue={amount === 7 && hasLink}>
          <div>
            <p>The number is 7</p>
            <a href="https://github.com/davi1985">Github Link</a>
          </div>
        </Show.When>

        <Show.Else>
          <p>Conditional are not met!</p>
        </Show.Else>
      </Show>
    </div>
  );
};
