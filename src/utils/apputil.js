class Apputils {
	static filterArrayByString(mainArr, searchText) {
		if (searchText === '') {
			return mainArr;
		}

		searchText = searchText.toLowerCase();

		return mainArr.filter(itemObj => this.searchInObj(itemObj, searchText));
	}
    static searchInObj(itemObj, searchText) {
		if (!itemObj) {
			return false;
		}

		const propArray = Object.keys(itemObj);

		for (let i = 0; i < propArray.length; i += 1) {
			const prop = propArray[i];
			const value = itemObj[prop];

			if (typeof value === 'string') {
				if (this.searchInString(value, searchText)) {
					return true;
				}
			} else if (Array.isArray(value)) {
				if (this.searchInArray(value, searchText)) {
					return true;
				}
			}

			if (typeof value === 'object') {
				if (this.searchInObj(value, searchText)) {
					return true;
				}
			}
		}
		return false;
	}
    static searchInArray(arr, searchText) {
		arr.forEach(value => {
			if (typeof value === 'string') {
				if (this.searchInString(value, searchText)) {
					return true;
				}
			}

			if (typeof value === 'object') {
				if (this.searchInObj(value, searchText)) {
					return true;
				}
			}
			return false;
		});
		return false;
	}
    static searchInString(value, searchText) {
		return value.toLowerCase().includes(searchText);
	}
	static descompareemail(a, b) {
		const bandA = a.email.toUpperCase();
		const bandB = b.email.toUpperCase();
	  
		let comparison = 0;
		if (bandA > bandB) {
		  comparison = 1;
		} else if (bandA < bandB) {
		  comparison = -1;
		}
		return comparison* -1;
	}
	static asccompareemail(a, b) {
		const bandA = a.email.toUpperCase();
		const bandB = b.email.toUpperCase();
	  
		let comparison = 0;
		if (bandA > bandB) {
		  comparison = 1;
		} else if (bandA < bandB) {
		  comparison = -1;
		}
		return comparison;
	}
	static descompareage(a, b) {
		const bandA = a.dob.age;
		const bandB = b.dob.age;
	  
		let comparison = 0;
		if (bandA > bandB) {
		  comparison = 1;
		} else if (bandA < bandB) {
		  comparison = -1;
		}
		return comparison* -1;
	}
	static asccompareage(a, b) {
		const bandA = a.dob.age;
		const bandB = b.dob.age;
	  
		let comparison = 0;
		if (bandA > bandB) {
		  comparison = 1;
		} else if (bandA < bandB) {
		  comparison = -1;
		}
		return comparison;
	}
}
export default Apputils;