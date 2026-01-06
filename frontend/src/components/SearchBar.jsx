const SearchBar = ({ value, onChange, onSearch, language, setLanguage }) => {

    const handleChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <>
            <div className="sm:flex md:flex sm:flex-row md:flex-row items-center flex flex-col sm:justify-between md:justify-center gap-2 mb-5">
                <input
                    type="text"
                    className="w-full max-w-[400px] px-6 py-2 border border-gray-600 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
                    placeholder="enter ingredients"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && onSearch()}
                />

                <button
                    onClick={() => { onSearch }}
                    className="bg-brand-cyan text-white px-8 py-2 rounded-full text-xl font-medium hover:opacity-90 transition-opacity cursor-pointer"
                >
                    search
                </button>
            </div>

            <div className="mb-3 bg-brand-cyan rounded-full p-2 text-gray-500 cursor-pointer">
                <select
                    value={language}
                    onChange={handleChange}
                    name="language"
                    id="language"
                >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Bhojpuri">Bhojpuri</option>
                    <option value="Marathi">Marathi</option>
                </select>
            </div>
        </>
    );
};

export default SearchBar;
