import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import VideoFacade from '../components/VideoFacade';
import { translations } from '../i18n';

const video = translations.testimonials.video;

// Rendering into a container of our own keeps the tree detached from the
// document: happy-dom only fetches an iframe once it is connected, and no test
// should be reaching out to YouTube for real.
const renderFacade = () =>
  render(
    <VideoFacade
      videoId={video.videoId}
      poster={video.poster}
      width={video.posterWidth}
      height={video.posterHeight}
      title={video.videoTitle}
      playLabel={video.playLabel}
      duration={video.duration}
    />,
    { container: document.createElement('div') },
  );

describe('VideoFacade', () => {
  it('shows the poster and no iframe before the first click', () => {
    const { container, getByRole } = renderFacade();
    expect(getByRole('button', { name: video.playLabel })).not.toBeNull();
    expect(container.querySelector('img').getAttribute('src')).toBe(video.poster);
    expect(container.querySelector('iframe')).toBeNull();
  });

  it('swaps in an autoplaying privacy-mode iframe on click', () => {
    const { container, getByRole } = renderFacade();
    fireEvent.click(getByRole('button', { name: video.playLabel }));

    const iframe = container.querySelector('iframe');
    expect(iframe).not.toBeNull();
    expect(iframe.getAttribute('src')).toContain(`https://www.youtube-nocookie.com/embed/${video.videoId}`);
    expect(iframe.getAttribute('src')).toContain('autoplay=1');
    expect(iframe.getAttribute('title')).toBe(video.videoTitle);
    expect(container.querySelector('img')).toBeNull();
  });
});
