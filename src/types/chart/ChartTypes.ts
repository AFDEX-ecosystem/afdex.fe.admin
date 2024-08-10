enum Position {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right'
}

enum HorizontalAlign {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

interface barChartDataset {
  name: string;
  data: number[];
}

interface labelsPosition {
  position: Position,
  horizontalAlign: HorizontalAlign
}

export type {
  barChartDataset,
  labelsPosition
};
