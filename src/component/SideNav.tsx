import { Box, Circle, Flex } from '@chakra-ui/react';
import {
  createRef,
  useEffect,
  useMemo,
  LegacyRef,
  useState,
  useRef,
  forwardRef,
  ReactNode,
} from 'react';
import './styles.css';

const data = [
  {
    id: 0,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet eros quis quam suscipit sollicitudin. Aenean commodo volutpat mauris, eget faucibus mauris commodo eget. Phasellus et efficitur enim, non placerat sem. In neque dolor, maximus non auctor bibendum, lobortis a neque. Nam dapibus pellentesque venenatis. Fusce aliquet arcu a tristique lacinia. Aliquam erat volutpat. Sed sollicitudin blandit maximus. Aenean nisl lacus, ultricies quis porttitor ullamcorper, tempus et risus. Nullam ultricies purus vel felis viverra placerat. Duis hendrerit arcu lectus. Aliquam at lacus libero. Aliquam non lorem tincidunt, rutrum lacus at, aliquet dolor. Curabitur lorem metus, dictum non porta lacinia, consequat vel lacus. Vestibulum facilisis sodales mauris, tincidunt efficitur sapien efficitur et. Nam finibus metus sit amet leo iaculis accumsan. Integer nulla purus, mollis nec malesuada id, luctus sed ante. Nulla facilisi. Donec nec placerat magna. In pretium cursus augue, at sagittis ante sollicitudin non. Nam ullamcorper, tellus quis condimentum auctor, metus tellus laoreet mauris, nec facilisis nunc purus nec nulla. Morbi et cursus purus. Integer at enim vitae urna interdum ultricies. Nulla et mi mattis, molestie sapien et, porttitor massa. Maecenas quis semper lorem, eget dignissim erat. Aenean condimentum lectus et nunc sagittis, at consectetur ex eleifend. Cras sed dui vitae velit blandit facilisis et et nibh. Nullam pulvinar, quam ullamcorper gravida viverra, neque nibh consectetur purus, ornare imperdiet ex lectus ut dolor. Etiam tincidunt magna lectus, vitae fringilla velit sagittis sit amet. Duis egestas sollicitudin dui, sed viverra leo tincidunt non. Ut at nibh quis diam rutrum ultrices. Donec sit amet sollicitudin nisi. Donec bibendum ornare tortor. Maecenas ut vulputate nisi. Mauris ut lorem quam.',
  },
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet eros quis quam suscipit sollicitudin. Aenean commodo volutpat mauris, eget faucibus mauris commodo eget. Phasellus et efficitur enim, non placerat sem. In neque dolor, maximus non auctor bibendum, lobortis a neque. Nam dapibus pellentesque venenatis. Fusce aliquet arcu a tristique lacinia. Aliquam erat volutpat. Sed sollicitudin blandit maximus. Aenean nisl lacus, ultricies quis porttitor ullamcorper, tempus et risus. Nullam ultricies purus vel felis viverra placerat. Duis hendrerit arcu lectus. Aliquam at lacus libero. Aliquam non lorem tincidunt, rutrum lacus at, aliquet dolor. Curabitur lorem metus, dictum non porta lacinia, consequat vel lacus. Vestibulum facilisis sodales mauris, tincidunt efficitur sapien efficitur et. Nam finibus metus sit amet leo iaculis accumsan. Integer nulla purus, mollis nec malesuada id, luctus sed ante. Nulla facilisi. Donec nec placerat magna. In pretium cursus augue, at sagittis ante sollicitudin non. Nam ullamcorper, tellus quis condimentum auctor, metus tellus laoreet mauris, nec facilisis nunc purus nec nulla. Morbi et cursus purus. Integer at enim vitae urna interdum ultricies. Nulla et mi mattis, molestie sapien et, porttitor massa. Maecenas quis semper lorem, eget dignissim erat. Aenean condimentum lectus et nunc sagittis, at consectetur ex eleifend. Cras sed dui vitae velit blandit facilisis et et nibh. Nullam pulvinar, quam ullamcorper gravida viverra, neque nibh consectetur purus, ornare imperdiet ex lectus ut dolor. Etiam tincidunt magna lectus, vitae fringilla velit sagittis sit amet. Duis egestas sollicitudin dui, sed viverra leo tincidunt non. Ut at nibh quis diam rutrum ultrices. Donec sit amet sollicitudin nisi. Donec bibendum ornare tortor. Maecenas ut vulputate nisi. Mauris ut lorem quam.',
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet eros quis quam suscipit sollicitudin. Aenean commodo volutpat mauris, eget faucibus mauris commodo eget. Phasellus et efficitur enim, non placerat sem. In neque dolor, maximus non auctor bibendum, lobortis a neque. Nam dapibus pellentesque venenatis. Fusce aliquet arcu a tristique lacinia. Aliquam erat volutpat. Sed sollicitudin blandit maximus. Aenean nisl lacus, ultricies quis porttitor ullamcorper, tempus et risus. Nullam ultricies purus vel felis viverra placerat. Duis hendrerit arcu lectus. Aliquam at lacus libero. Aliquam non lorem tincidunt, rutrum lacus at, aliquet dolor. Curabitur lorem metus, dictum non porta lacinia, consequat vel lacus. Vestibulum facilisis sodales mauris, tincidunt efficitur sapien efficitur et. Nam finibus metus sit amet leo iaculis accumsan. Integer nulla purus, mollis nec malesuada id, luctus sed ante. Nulla facilisi. Donec nec placerat magna. In pretium cursus augue, at sagittis ante sollicitudin non. Nam ullamcorper, tellus quis condimentum auctor, metus tellus laoreet mauris, nec facilisis nunc purus nec nulla. Morbi et cursus purus. Integer at enim vitae urna interdum ultricies. Nulla et mi mattis, molestie sapien et, porttitor massa. Maecenas quis semper lorem, eget dignissim erat. Aenean condimentum lectus et nunc sagittis, at consectetur ex eleifend. Cras sed dui vitae velit blandit facilisis et et nibh. Nullam pulvinar, quam ullamcorper gravida viverra, neque nibh consectetur purus, ornare imperdiet ex lectus ut dolor. Etiam tincidunt magna lectus, vitae fringilla velit sagittis sit amet. Duis egestas sollicitudin dui, sed viverra leo tincidunt non. Ut at nibh quis diam rutrum ultrices. Donec sit amet sollicitudin nisi. Donec bibendum ornare tortor. Maecenas ut vulputate nisi. Mauris ut lorem quam.',
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet eros quis quam suscipit sollicitudin. Aenean commodo volutpat mauris, eget faucibus mauris commodo eget. Phasellus et efficitur enim, non placerat sem. In neque dolor, maximus non auctor bibendum, lobortis a neque. Nam dapibus pellentesque venenatis. Fusce aliquet arcu a tristique lacinia. Aliquam erat volutpat. Sed sollicitudin blandit maximus. Aenean nisl lacus, ultricies quis porttitor ullamcorper, tempus et risus. Nullam ultricies purus vel felis viverra placerat. Duis hendrerit arcu lectus. Aliquam at lacus libero. Aliquam non lorem tincidunt, rutrum lacus at, aliquet dolor. Curabitur lorem metus, dictum non porta lacinia, consequat vel lacus. Vestibulum facilisis sodales mauris, tincidunt efficitur sapien efficitur et. Nam finibus metus sit amet leo iaculis accumsan. Integer nulla purus, mollis nec malesuada id, luctus sed ante. Nulla facilisi. Donec nec placerat magna. In pretium cursus augue, at sagittis ante sollicitudin non. Nam ullamcorper, tellus quis condimentum auctor, metus tellus laoreet mauris, nec facilisis nunc purus nec nulla. Morbi et cursus purus. Integer at enim vitae urna interdum ultricies. Nulla et mi mattis, molestie sapien et, porttitor massa. Maecenas quis semper lorem, eget dignissim erat. Aenean condimentum lectus et nunc sagittis, at consectetur ex eleifend. Cras sed dui vitae velit blandit facilisis et et nibh. Nullam pulvinar, quam ullamcorper gravida viverra, neque nibh consectetur purus, ornare imperdiet ex lectus ut dolor. Etiam tincidunt magna lectus, vitae fringilla velit sagittis sit amet. Duis egestas sollicitudin dui, sed viverra leo tincidunt non. Ut at nibh quis diam rutrum ultrices. Donec sit amet sollicitudin nisi. Donec bibendum ornare tortor. Maecenas ut vulputate nisi. Mauris ut lorem quam.',
  },
];

const colors = ['Beige', 'Khaki', 'DeepSkyBlue', 'LightCyan'];
const selectedColor = 'red';

const SpyContainer = forwardRef(
  (props: { children: ReactNode }, ref: React.Ref<HTMLDivElement>) => (
    <Box
      overflow='auto'
      w='500px'
      h='100%'
      bg='darkgray'
      ref={ref}
    >
      {props.children}
    </Box>
  )
);

const useIntercection = (elementsNumber: number) => {
  const [selectedRefIdx, setSelectedRefIdx] = useState(0);
  const refs = useMemo(
    () =>
      Array(elementsNumber)
        .fill(true)
        .map(() => createRef<HTMLElement>()),
    [elementsNumber]
  );

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: containerRef.current,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      const indexNumber = entry.target.getAttribute('data-index-number');

      if (entry.isIntersecting && indexNumber)
        setSelectedRefIdx(Number(indexNumber));
    }, options);

    refs.forEach((ref) => ref.current && observer.observe(ref.current));
  }, [refs]);

  const selectSection = (idx: number) => {
    const ref = refs[idx];
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setSelectedRefIdx(idx);
  };

  return { refs, selectedRefIdx, containerRef, selectSection };
};

export default function App() {
  const { refs, selectedRefIdx, containerRef, selectSection } = useIntercection(
    data.length
  );

  return (
    <div className='App'>
      <Flex
        h={700}
        bg='white'
      >
        <Box
          bg='tomato'
          padding='10'
        >
          {data.map((elem, idx) => (
            <Circle
              key={elem.id}
              mb='10'
              size='40'
              bg={selectedRefIdx === idx ? selectedColor : colors[elem.id]}
              onClick={() => selectSection(idx)}
              cursor='pointer'
              data-selected={selectedRefIdx === idx}
              data-testid='circle'
            >
              N - {elem.id}
            </Circle>
          ))}
        </Box>
        <Box
          p={10}
          flex={1}
          bg='cyan'
        >
          <SpyContainer ref={containerRef}>
            {data.map((elem, idx) => (
              <Box
                id={`${idx}`}
                data-index-number={idx}
                bg={selectedRefIdx === idx ? selectedColor : colors[elem.id]}
                p={5}
                mb={15}
                shadow='md'
                borderWidth='1px'
                key={elem.id}
                ref={refs[idx] as LegacyRef<HTMLDivElement>}
              >
                <Box
                  fontSize='20'
                  mb='5'
                >
                  Title {elem.id}
                </Box>
                {elem.text}
              </Box>
            ))}
          </SpyContainer>
        </Box>
      </Flex>
    </div>
  );
}
