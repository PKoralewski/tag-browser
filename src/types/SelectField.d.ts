export interface ISelectFieldProps {
	values: {
		name: string
		value: string | number
	}[]
	onSelectChange: (value: string) => void
}
