import { watch } from "vue";

export function useCharacterLength(value, limit = 100) {

    watch(value, (newVal) => {

        if(newVal.length === limit) {

            alert(`Sorry!!!!! only ${limit} characters are allowed`)
        }
    })
}