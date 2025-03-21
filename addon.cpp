#include <node.h>
#include <v8.h>

void add(const v8::FunctionCallbackInfo<v8::Value>& args) {
    if (args.Length() < 2) {
        // Return an error if there are fewer than 2 arguments
        v8::Isolate* isolate = args.GetIsolate();
        v8::HandleScope scope(isolate);
        
        // Using NewFromUtf8 safely with MaybeLocal
        v8::Local<v8::String> message = v8::String::NewFromUtf8(isolate, "Need two arguments").ToLocalChecked();
        
        // Set the return value
        args.GetReturnValue().Set(message);
        return;
    }
    // Do something else if there are 2 or more arguments
}

void Initialize(v8::Local<v8::Object> exports) {
    NODE_SET_METHOD(exports, "add", add);
}

NODE_MODULE(addon, Initialize)
