import "./App.css";
import "./ui-kit/atoms/icon/font-icons.css";
import Subtitle from "./ui-kit/atoms/text/subtitle";
import Icon from "./ui-kit/atoms/icon";
import PageTitle from "./ui-kit/atoms/text/page-title";
import TextBody from "./ui-kit/atoms/text/body";
import Button from "./ui-kit/atoms/button";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <PageTitle>Titulo de página</PageTitle>
      <Subtitle>Subtítulo por defecto</Subtitle>
      <Subtitle size="xs">Subtítulo pequeño</Subtitle>
      <Subtitle size="md">Subtítulo mediano</Subtitle>
      <Subtitle size="lg">Subtítulo grande</Subtitle>

      <Icon name="checkmark-circle" />
      <Icon name="search" />

      <Subtitle size="lg">
        Subtítulo con Icono: <Icon name="search" />
      </Subtitle>

      <TextBody>texto por defecto</TextBody>
      <TextBody size="xs">texto muy pequeño</TextBody>
      <TextBody size="sm">texto pequeño</TextBody>
      <TextBody size="md">texto mediano</TextBody>
      <TextBody size="lg">texto grande</TextBody>

      <Button
        color="secondary"
        cbClick={(ev) => console.log("Click en Volver", ev)}
      >
        Volver
      </Button>
      <Button color="primary">Example text</Button>
    </>
  );
}

export default App;
