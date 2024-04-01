export interface ISelectFieldProps {
	values: {
		name: string
		value: string | number
	}[]
	onChange: (value: string) => void
}
