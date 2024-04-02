export interface ITableSizerProps {
	tableSize: number
	minValue: number
	maxValue: number
	onSizeChange: (value: number) => void
}
