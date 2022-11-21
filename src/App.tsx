import {
  PhotoAlbum,
  RenderContainer,
  RenderContainerProps,
  RenderPhoto,
  RenderRowContainer
} from "react-photo-album";

import photos from "./photos";

const renderContainer: RenderContainer = ({
  containerProps,
  children,
  containerRef
}: RenderContainerProps) => (
  <div>
    <div ref={containerRef} {...containerProps}>
      {children}
    </div>
  </div>
);

const renderRowContainer: RenderRowContainer = ({
  rowContainerProps,
  rowIndex,
  rowsCount,
  children
}) => (
  <>
    <div {...rowContainerProps}>{children}</div>
    {rowIndex < rowsCount - 1 && (
      <div/>
    )}
  </>
);

const renderPhoto: RenderPhoto = ({
  layout,
  layoutOptions,
  imageProps: { alt, style, ...restImageProps }
}) => (
  <div
    style={{
      border: "2px solid #eee",
      borderRadius: "4px",
      boxSizing: "content-box",
      alignItems: "center",
      width: style?.width,
      padding: `${layoutOptions.padding - 2}px`,
      paddingBottom: 0
    }}
  >
    <img
      alt={alt}
      style={{ ...style, width: "100%", padding: 0 }}
      {...restImageProps}
    />
    <div
      style={{
        paddingTop: "8px",
        paddingBottom: "8px",
        overflow: "visible",
        whiteSpace: "nowrap",
        textAlign: "center"
      }}
    >
      {layoutOptions.viewportWidth ? (
        Math.round(layout.width) + " x " + Math.round(layout.height)
      ) : (
        <>&nbsp;</>
      )}
    </div>
  </div>
);

const App = () => (
  <PhotoAlbum
    layout="rows"
    photos={photos}
    spacing={20}
    padding={20}
    targetRowHeight={200}
    renderContainer={renderContainer}
    renderRowContainer={renderRowContainer}
    renderPhoto={renderPhoto}
  />
);

export default App;
