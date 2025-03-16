export class IndexDbHandler {

    /**
     * Otwiera bazę IndexedDB i zwraca jej instancję.
     */
    public static openDatabase(dbName: string, ): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(dbName);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Pobiera obiekt store z bazy danych.
     */
    public static getDBObjectStore(db: IDBDatabase, storeName: string, mode: IDBTransactionMode = "readonly"): IDBObjectStore {
        return db.transaction(storeName, mode).objectStore(storeName);
    }

    /**
     * Znajduje obiekt z najświeższą wartością `createdAt` w danym store.
     */
    public static getLatestCreatedAtObject(db: IDBDatabase, storeName: string): Promise<any | null> {
        return new Promise((resolve, reject) => {
            const store = this.getDBObjectStore(db, storeName);
            const request = store.openCursor();
            let latestObject: any = null;

            request.onsuccess = (event: Event) => {
                const cursor = (event.target as IDBRequest).result;
                if (cursor) {
                    const currentObject = cursor.value;
                    if (!latestObject || new Date(currentObject.createdAt) > new Date(latestObject.createdAt)) {
                        latestObject = currentObject;
                    }
                    cursor.continue();
                } else {
                    resolve(latestObject);
                }
            };

            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Pobiera obiekt na podstawie ID.
     */
    public static getObjectById(db: IDBDatabase, id: string): Promise<any | null> {
        return new Promise((resolve, reject) => {
            const store = this.getDBObjectStore(db, "items", "readonly");
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result || null);
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * Pobiera ostatni element na podstawie indeksu `createdAt`.
     */
    public static getLastElementByCreatedAt(db: IDBDatabase, storeName: string, indexName: string): Promise<any | null> {
        return new Promise((resolve, reject) => {
            const store = this.getDBObjectStore(db, storeName, "readonly");

            const index = store.index(indexName);
            const request = index.openCursor();
            let lastObject: any | null = null;

            request.onsuccess = (event) => {
                const cursor = (event.target as IDBRequest).result;

                if (cursor) {
                    lastObject = cursor.value;
                    cursor.continue();
                } else {
                    resolve(lastObject);
                }
            };

            request.onerror = () => reject(request.error);
        });
    }


}
