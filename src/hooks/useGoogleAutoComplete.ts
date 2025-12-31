import { useEffect, useRef } from "react"

interface UseGoogleAutocompleteProps {
  onPlaceSelected: (place: google.maps.places.PlaceResult) => void
  options?: google.maps.places.AutocompleteOptions
}

export const useGoogleAutocomplete = ({ onPlaceSelected, options }: UseGoogleAutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)

  useEffect(() => {
    if (!inputRef.current || !window.google?.maps?.places) return

    // Autocomplete 인스턴스 생성
    autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, options)

    // place_changed 이벤트 리스너
    const listener = autocompleteRef.current.addListener("place_changed", () => {
      const place = autocompleteRef.current?.getPlace()
      if (place && place.formatted_address) {
        onPlaceSelected(place)
        // 선택 후 input blur 처리
        setTimeout(() => {
          inputRef.current?.blur()
        }, 100)
      }
    })

    return () => {
      if (listener) {
        window.google.maps.event.removeListener(listener)
      }
    }
  }, [onPlaceSelected, options])

  return inputRef
}
