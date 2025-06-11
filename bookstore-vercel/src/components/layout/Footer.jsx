
//Simple footer displayed on all pages
export default function Footer() {
    return (


        <footer className="text-sm, text-center, mt-12, bg-shadow">

            <h6 className="text-s text-gray-500 text-center mt-4">Maria Mudrakova &copy; 2025 All Rights Reserved</h6>
            <p className="text-xs text-gray-500 text-center pb-1">
                This site uses content from
                <a href="https://wikipedia.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                >Wikipedia</a>, which is available under the
                <a href="https://creativecommons.org/licenses/by-sa/4.0/"
                    target="_blank" rel="noopener noreferrer"
                    className="underline"
                >Creative Commons Attribution-ShareAlike License (CC BY-SA 4.0)</a>.
            </p>
        </footer>

    )
}