import { Carousel } from '~/components/carousel';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Carousel',
};

export const Images = () => (
  <StoryContainer>
    <Carousel
      style={{ maxWidth: 800, width: '100%' }}
      placeholder="/static/Interesting-Fun-Facts-About-Flutter-banner-placeholder.jpg"
      images={[
        {
          src: '/static/ Interesting-Fun-Facts-About-Flutter-banner.jpg',
          alt: 'Neon pink and blue lights',
        },
        {
          src: '/static/laravel-journey-banner.jpg',
          alt: 'Geometric blue shapes',
        },
      ]}
      width={1920}
      height={1080}
    />
  </StoryContainer>
);
