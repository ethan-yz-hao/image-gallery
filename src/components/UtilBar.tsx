import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e7e7e7;
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

interface Props {
    selectAll: () => void;
    clearSelection: () => void;
    downloadSelected: () => void;

}

const UtilBar = ({ selectAll, clearSelection, downloadSelected }: Props) => {
    return (
        <Bar>
            <Button onClick={selectAll}>Select All</Button>
            <Button onClick={clearSelection}>Clear Selection</Button>
            <Button onClick={downloadSelected}>Download Selected</Button>
        </Bar>
    );
};

export default UtilBar;
