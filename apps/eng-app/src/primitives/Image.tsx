import { HTMLAttributes, ReactEventHandler } from 'react';
import classnames from 'classnames';

type Props = {
  attrs?: HTMLAttributes<HTMLImageElement> & {
    [p: `data-${string}`]: string | undefined;
  };
  src: string | undefined;
  alt?: string;
  className?: string;
  onSelect?: () => void;
  onLoad?: ReactEventHandler;
};

export const Image = ({
  src,
  alt,
  className,
  attrs,
  onSelect,
  onLoad,
}: Props) => {
  return (
    <img
      {...attrs}
      src={src}
      alt={alt}
      onClick={onSelect}
      onLoad={onLoad}
      loading="lazy"
      className={classnames('object-cover w-full h-full', className)}
    />
  );
};
