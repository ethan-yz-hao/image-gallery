import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const SkeletonWrapper = styled.div`
    background: #fff;
    border: 1px solid #eee;
    border-radius: 12px;
    margin: 10px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    height: 350px;
`;

export const SkeletonHeader = styled.div`
    height: 200px;
    background: #eee linear-gradient(to right, #eeeeee 0%, #dddddd 20%, #eeeeee 40%, #eeeeee 100%) no-repeat;
    animation: ${shimmer} 0.8s linear infinite;
    background-size: 800px 350px;
`;

const SkeletonBody = styled.div`
    padding: 5px 15px 10px 15px;
`;

const SkeletonLine = styled.div`
    height: 20px;
    margin: 5px 0;
    border-radius: 4px;
    background: #eee linear-gradient(to right, #eeeeee 0%, #dddddd 20%, #eeeeee 40%, #eeeeee 100%) no-repeat;
    animation: ${shimmer} 0.8s linear infinite;
    background-size: 800px 100px;
`;

const SkeletonSmallLine = styled(SkeletonLine)`
    height: 10px;
    width: 60%;
`;

const ImageCardSkeleton = () => (
    <SkeletonWrapper>
        <SkeletonHeader />
        <SkeletonBody>
            <SkeletonLine />
            <SkeletonSmallLine />
        </SkeletonBody>
    </SkeletonWrapper>
);

export default ImageCardSkeleton;