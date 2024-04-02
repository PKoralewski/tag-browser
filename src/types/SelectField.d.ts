export interface ISelectFieldProps {
	value: string | number
	values: {
		name: string
		value: string | number
	}[]
	onSelectChange: (value: string) => void
}
