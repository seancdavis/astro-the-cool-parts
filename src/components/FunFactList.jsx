import FunFact from "./FunFact";

export default function FunFactList({ facts }) {
  return (
    <>
      {facts.map((fact, idx) => (
        <FunFact key={idx} heading={fact.heading} sourceUrl={fact.sourceUrl}>
          {fact.body}
        </FunFact>
      ))}
    </>
  );
}
