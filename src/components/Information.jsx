import { Flex, Text, Icon, Heading } from "@chakra-ui/react";

const movieSVG = (
  <path
    d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
    fill="#FFF"
    opacity=".75"
  />
);
const seriesSVG = (
  <path
    d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
    fill="#FFF"
    opacity=".75"
  />
);

function Information({ item, position }) {
  return (
    <Flex
      position={position}
      bottom="10%"
      left="5%"
      color="white"
      direction="column"
      marginTop={2}
    >
      <Flex justify="space-between">
        <Text fontWeight="300" fontSize={["xs", "md", "md"]} color="white">
          {item.year + " · "} &nbsp;
          <Icon viewBox="0 0 16 16" boxSize={4}>
            {item.category === "Movie" ? movieSVG : seriesSVG}
          </Icon>
          {item.category + " · "}
          {item.rating}
        </Text>
      </Flex>
      <Heading
        // size={["md", "lg", "2rem"]}
        fontSize={["initial", null, null, null, "1.5rem"]}
        letterSpacing="0.2"
        marginTop={["-5px", 0, 0]}
        fontWeight="600"
      >
        {item.title}
      </Heading>
    </Flex>
  );
}

export default Information;
