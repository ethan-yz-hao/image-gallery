import Masonry from 'react-masonry-css';
import ImageCardSkeleton from "@/components/ImageCardSkeleton.tsx";

const breakpointColumnsObj = {
    default: 5,
    1600: 4,
    1300: 3,
    980: 2,
    650: 1
};

const ImageGridSkeleton = ({n}: { n: number }) => {
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {Array.from({length: n}).map(() => (
                <ImageCardSkeleton/>
            ))}
        </Masonry>
    );
};

export default ImageGridSkeleton;