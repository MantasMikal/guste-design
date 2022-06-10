import { useEffect } from 'react'

function useScript(body,  id) {
  useEffect(() => {
      if(typeof window === 'undefined') return
      if (!body) {
        return
      }

      // Fetch existing script element by id
      // It may have been added by another instance of this hook
      let script = document.getElementById(id)
      console.log("🚀 ~ file: useScript.js ~ line 12 ~ useEffect ~ script", script)
      console.log("🚀 ~ file: useScript.js ~ line 16 ~ useScript ~ script", script)

      if (!script) {
        // Create script
        script = document.createElement('script')
        script.id = id
        script.async = false
        script.innerHTML = body
        document.body.appendChild(script)
      }
    },
    [body] // Only re-run effect if script src changes
  )
  return
}

export default useScript
