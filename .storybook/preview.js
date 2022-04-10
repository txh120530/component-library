// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
import '../tailwind.css';

export const parameters = {
	    themes: {
        clearable: false,
        list: [
            {
                name: 'Light',
                class: [],
                default: true
            },
            {
                name: 'Dark',
                // The class dark will be added to the body tag
                class: ['dark'],
                color: '#000000'
            }
        ]
    },
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' }
};
