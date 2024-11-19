#include <iostream>
#include <vector>
using namespace std;

class Matrix {
private:
    int m, n;                  //мөр болон багана
    vector<vector<float>> values; // C++ equivalent of a[i][j]

public:
    // байгуулагч
    Matrix(int murs = 1, int bags = 1) : m(murs), n(bags), values(murs, vector<float>(bags, 0.0f)) {
        // m x n matrix үүсгээд анхны утга 0.0f онооно
    }

    // Set функц дамжуулж утга оноох. Мөр баганаас хэтрэхгүйн тулд mur >= 0 && mur < m && bag >= 0 && bag < n гэж шалгаад 
    //дамжиж ирсэн утгыг оруулна.
    void set(int mur, int bag, float value) {
        if (mur >= 0 && mur < m && bag >= 0 && bag < n) {
            values[mur][bag] = value;
        }
    }

    // Мөр баганаас хэтрэхгүйн тулд mur >= 0 && mur < m && bag >= 0 && bag < n гэж шалгаад get функцээр матриц дээр байгаа утгыг авна
    float get(int mur, int bag) const {
        if (mur >= 0 && mur < m && bag >= 0 && bag < n) {
            return values[mur][bag];
        }
        return 0.0f; //илүү гарсан бол 0 гэж буцаана.
    }

    // print
    void print() const {
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                cout << values[i][j] << " ";
            }
            cout << endl;
        }
    }

    //1. матриц нэмэх
    Matrix operator+(const Matrix& other) const { //Overload аль нэг матрицийн утгыг const авж 
    //солихгүйгээр 2 матрицийг нэмэх ба шинэ Matrix object буцаах
    // + тэмдэг нь 2 матрицийг нэмэх боломжийг олгоно.
     //+ тэмдэггүй бол оноох үйлдэл хийнэ
        Matrix result(m, n); //result нэртэй Matrix объект үүсгэнэ
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                result.values[i][j] = values[i][j] + other.values[i][j]; //нэмэх
            }
        }
        return result; //объектоо буцаах
    }

    //1.2 Матриц scalar нэмэх R = R1 + 5.0(float)
    Matrix operator+(float scalar) const {  //Overload аль нэг матрицийн утгыг const авж солихгүйгээр 
    //2 матрицийг нэмэх ба шинэ scalar Matrix object буцаах
        Matrix result(m, n);
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                result.values[i][j] = values[i][j] + scalar;
            }
        }
        return result;
    }

    Matrix& tooNemeh(int mur, int bag, float too) { 
        if (mur >= 0 && mur < m && bag >= 0 && bag < n) { 
            values[mur][bag] += too; 
            } 
        else { 
            cout << "Index out of bounds" << endl; 
            } 
        return *this;
    }

    //2. Матриц үржүүлэх
    Matrix operator*(const Matrix& other) const { //Overload ашиглан 2 матрицийг үржүүлэх
        Matrix result(m, other.n);
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < other.n; ++j) {
                for (int k = 0; k < n; ++k) {
                    result.values[i][j] += values[i][k] * other.values[k][j];
                }
            }
        }
        return result;
    }

    //3. Матриц хасах
    Matrix operator-(const Matrix& other) const { //Overload ашиглан хасах үйлдэл хийх
        Matrix result(m, n);
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                result.values[i][j] = values[i][j] - other.values[i][j];
            }
        }
        return result;
    }

    //4. нэг матрицийн объектыг нөгөөд утга оноох
    Matrix& operator=(const Matrix& other) { //Overload ашиглан нэг матрицийн объектыг нөгөөд утга оноох
        if (this != &other) {
            m = other.m;
            n = other.n;
            values = other.values;
        }
        return *this;
    }

    //5. нэгээр нэмэгдүүлэх prefix
    Matrix& operator++() { //Overload ашиглан матрицийн утга 1ээр нэмэх
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                values[i][j] += 1.0f;
            }
        }
        return *this; //*this нь матрицийг өөрчилсөний дараахыг буцааж байгаа мөн chaining хийх боломж олгоно
    }

    //6. prefix нэгээр хасах 
    Matrix& operator--() { //Overload ашиглан матрицийн утга 1ээр хасах
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                values[i][j] -= 1.0f;
            }
        }
        return *this;
    }

    // postfix нэгээр нэмэгдүүлэх
    Matrix operator++(int){
        Matrix bin = *this; //төлөвийг нь хадгалана
        ++*this; // нэмэгдүүлнэ
        return bin; // нэмэгдэхээс өмнөх төлөвийг дамжуулна
    }

    //postfix нэгээр хасах 
    Matrix operator--(int) { //Overload ашиглан матрицийн утга 1ээр хасах postfix
        Matrix bin = *this;
        --*this;
        return bin;
    }

    //7. Өөр матрицийг энэ матрицад нэмэх
    Matrix& operator+=(const Matrix& other) { //Overload ашиглан матриц1 дээр матриц2 утга нэмээд матриц1-т хадгалах
        *this = *this + other;
        return *this;
    }

    //8. Өөр матрицийг энэ матрицаас хасах
    Matrix& operator-=(const Matrix& other) { //Overload ашиглан матриц1 аас матриц2 утга хасаад матриц1-т хадгалах
        *this = *this - other;
        return *this;
    }

    //9. Өөр матрицийг энэ матрицаар үржүүлэх
    Matrix& operator*=(const Matrix& other) { //Overload ашиглан матриц1-г матриц2-р үржүүлээд матриц1-т хадгалах
        *this = *this * other;
        return *this;
    }

    //10. Матрицийн нүдэн дэх утга буцаах
    float& operator()(int mur, int bag) {
        return values[mur][bag];
    }

    //11. Матрицыг хөрвүүлэх
    Matrix transform() const { //матрицийн нүд болгоноор гүйгээд мөрийг багана, баганыг мөр болгон result гэсэн матрицад хадгалана.
        Matrix result(n, m);
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                result.values[j][i] = values[i][j];
            }
        }
        return result;
    }

};

int main() {
    Matrix R1(2, 2); // 2x2 matrix
    R1.set(0, 0, 1.0f);
    R1.set(0, 1, 2.0f);
    R1.set(1, 0, 3.0f);
    R1.set(1, 1, 4.0f); //утга оноох

    Matrix R2 = R1 + 5.0f; // R1-т бүгдэнд нь 5.0f нэмэх
    Matrix R3 = R1 + R2; 
    Matrix R4 = R1;  // 2 матрицийг хооронд нь нэмэх

    cout << "Matrix R1:" << endl;
    R1.print();

    cout << "\nMatrix R2 (R1 + 5):" << endl;
    R2.print();

    cout << "\nMatrix R3 (R1 + R2):" << endl;
    R3.print();

    cout << "\nMatrix R4 (R4 = R1):" << endl;
    R4.print();

    ++R1; 
    cout << "\nMatrix R1 after increment:" << endl;
    R1.print();

    --R1; 
    cout << "\nMatrix R1 after decrement:" << endl;
    R1.print();
    
    Matrix R5(2,2);
    R5 += R1;
    cout << "\nMatrix R5=R1:" << endl;
    R5.print();

    Matrix R6(2,2);
    R6 -= R1;
    cout << "\nMatrix R5=R1:" << endl;
    R6.print();

    Matrix R7(2,2);
    R7 *= R1;
    cout << "\nMatrix R5=R1:" << endl;
    R7.print();

    cout << "R1(0, 0)" << R1(0, 0) << endl;

    Matrix R8 = R1.transform(); 
    cout << "\nTransposed Matrix R1:" << endl;
    R8.print();

    R1++;
    cout << "Matrix R1 after postfix increment" << endl;
    R1.print();

    R1--;
    cout << "Matrix R1 after postfix decrement" << endl;
    R1.print();

    R1.tooNemeh(0,1,5);
    
    R1.print();
    return 0;
}
