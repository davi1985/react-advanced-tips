import { Books } from "./map-conventional";
import { Books as BooksWithMapAdvanced } from "./map-advanced";
import { ConditionalRenderingConventional } from "./conditional-rendering-conventional";
import { ConditionalRenderingAdvanced } from "./conditional-rendering-advanced";

export const App = () => {
  return (
    <div>
      <Books />

      <hr />

      <BooksWithMapAdvanced />

      <hr />

      <ConditionalRenderingConventional />

      <hr />

      <ConditionalRenderingAdvanced />
    </div>
  );
};
